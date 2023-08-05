//Model methods imports
import * as model from "../models/hotelModel.js";

export const getAllHotels = (req, res) => {
    model.allHotels().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
}

export const getOneHotelByItsId = (req, res) => {
    model.oneById(req.params.id).then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
}

export const getAllHotelsOrderByRate = (req, res) => {
    model.orderByRate().then((results) => {
        res.status(200).json(results);
    }).catch((e) => {
        res.status(500);
    })
};


export const getAllCity = (req, res) => {
    model.AllCity().then((results) => {
       res.status(200).json(results);
   }).catch((e) => {
       res.status(500).json({ error: "Failed to fetch AllCity." });
   });
}

export const updateOneHotel = (req, res) => {
    const { id, name, address, is_active, id_city } = req.body;

    model.updateHotel({ id, name, address, is_active, id_city })
        .then(() => res.status(200).json({ message: "Hotel updated successfully." }))
        .catch((e) => res.status(500).json({ error: "Error updating hotel." }));
};

export const getHotelWithAvailableRooms = (req, res) => {
    const {id_city, start_date, end_date} = req.body;

    model.availableHotels(id_city, start_date, end_date)
        .then((results) => res.status(200).json(results))
        .catch((e) => res.status(500));
}