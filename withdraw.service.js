const { v4: uuid } = require('uuid')
const db = require('../config/database')

exports.withdraw = async (req, res) => {
  const { producerId, amount } = req.body

  await db.query(
    `UPDATE producers 
     SET balance_available = balance_available - $1 
     WHERE id=$2 AND balance_available >= $1`,
    [amount, producerId]
  )

  await db.query(
    `INSERT INTO withdrawals VALUES ($1,$2,$3,'REQUESTED',NOW())`,
    [uuid(), producerId, amount]
  )

  res.json({ status: 'WITHDRAW_REQUESTED' })
}
