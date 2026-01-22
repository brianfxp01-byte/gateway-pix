const { v4: uuid } = require('uuid')
const db = require('../config/database')

exports.createPix = async (req, res) => {
  const { producerId, amount } = req.body
  const availableAt = new Date(Date.now() + 7*24*60*60*1000)

  await db.query(
    `INSERT INTO transactions VALUES ($1,$2,$3,'PAID',NOW(),$4)`,
    [uuid(), producerId, amount, availableAt]
  )

  await db.query(
    `UPDATE producers SET balance_pending = balance_pending + $1 WHERE id=$2`,
    [amount, producerId]
  )

  res.json({ status: 'PAID', availableAt })
}
