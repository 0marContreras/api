import { RequestHandler } from "express";
import Video from "./video";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    return res.json(video);
  } catch (error) {
    res.json({ msg: "No hay video" });
  }
};

export const createVideo: RequestHandler = async (req, res) => {
  const found = await Video.findOne({ url: req.body.url });

  if (found) {
    return res.status(301).json({ msg: "Video ya existe" });
  }
  const video = new Video(req.body);
  const saved = await video.save();
  console.log(saved);
  res.json("Subiendo video");
};

export const deleteVideo: RequestHandler = async (req, res) => {
    try {
        const video = await Video.findByIdAndDelete(req.params.id);
        return res.json(video);
      } catch (error) {
        res.json({ msg: "No se pudo eliminar el video" });
      }
};

export const updateVideo: RequestHandler = async (req, res) => {
    try {
        const video = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(video)
    } catch (error) {
        res.json(error)
    }
};
