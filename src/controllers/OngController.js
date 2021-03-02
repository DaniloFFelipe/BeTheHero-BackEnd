const crypto = require('crypto');
const db = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('hex');

    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.status(201).json({
      id,
    });
  },

  async index(req, res) {
    const ongs = await db('ongs').select('*');

    return res.json(ongs);
  },
};
