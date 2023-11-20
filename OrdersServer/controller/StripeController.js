export class StripeController {
  constructor(
    stripe,
    SUCCESS,
    CANCELED,
  ) {
    this.stripe = stripe
    this.SUCCESS = 'https://theaudioonline.store/success'
    this.CANCELED = 'https://theaudioonline.store/canceled'
  }

  async checkVat(req, res) {
    const items = req.body.items
    const address = req.body.address
    let lineItems = []
    items.forEach((item) => {
      lineItems.push({
        amount: item.amount,
        reference: item.reference,
      })
    })
    try {
      const calculation = await this.stripe.tax.calculations.create({
        currency: 'usd',
        line_items: lineItems,
        customer_details: {
          address: {
            line1: address.line1,
            city: address.city,
            state: address.state,
            postal_code: address.postal_code,
            country: address.country,
          },
          address_source: 'billing',
        },
        expand: ['line_items.data.tax_breakdown'],
      })
      res.status(200).json({ taxAmount: calculation.tax_amount_exclusive })
    } catch (error) {
      console.error('Wystąpił błąd:', error)
      res
        .status(500)
        .json({ error: 'Wystąpił błąd podczas obliczania podatku' })
    }
  }

  async checkout (req, res)  {
    const items = req.body.items
    const customer_email = req.body.customerEmail
    console.log(items)
    let lineItems = []
    items.forEach((item) => {
      lineItems.push({
        price: item.priceId,
        quantity: item.quantity,
      })
    })
  
    const session = await this.stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${this.SUCCESS}`,
      cancel_url: `${this.CANCELED}`,
      customer_email: customer_email,
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 5000,
              currency: 'usd',
            },
            display_name: 'Next day ship',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 5,
              },
            },
          },
        },
      ],
      automatic_tax: {
        enabled: true,
      },
    })
  
    res.send(
      JSON.stringify({
        url: session.url,
      })
    )
  }
}
