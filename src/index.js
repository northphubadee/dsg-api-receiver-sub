const express = require('express')
const bodyParser = require('body-parser')
const { prisma } = require('./generated/prisma-client')

const app = express()

app.use(bodyParser.json())

app.post(`/payment-notification`, async (req, res) => {

  const  iso4217_currency_numeric_code  = req.body.currencyCode
  
  const currency = await prisma.currency({ iso4217_currency_numeric_code })

  cur = { "currency":currency.iso4217_currency_alphabetic_code }

  var obj = Object.assign(req.body, cur)

  const result = await prisma.createPayment({
    ...obj,
  })

  const data = {"resCode":"00", "resDesc":"success","transactionId": result.transactionId ,"confirmId": result.id }
  res.json(data)

})

app.listen(4000, () =>
  console.log('Server is running on http://localhost:4000'),
)
