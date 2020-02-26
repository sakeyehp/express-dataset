const deleteEvents = async (req, res) => {
    await Event.destroy({
      where: {},
      truncate: true,
  });
  return res.status(200).send({});
};

module.exports = deleteEvents;