import { Router } from "express";
import { getAllFavs } from "../controllers/getAllFavs.controllers";
import { createFav } from "../controllers/createFav.controllers";
import { createFavSchema, reqFavValidator, userIdExistsValidator } from "../middlewares/reqFavValidator.middlewares";
import { getFavById } from "../controllers/getFavById.controllers";
import { deleteFavById } from "../controllers/deleteFavById.controllers";
import { isAuthenticated } from "../../auth/middlewares/isAuthenticated.middleware";
import { addFavItem } from "../controllers/addFavItem.controllers";
import { getUserFavLists } from "../controllers/getUserFavLists.controllers";

const router: Router = Router();

router.post('/favs',[isAuthenticated, reqFavValidator(createFavSchema)],createFav);
router.get('/favs',isAuthenticated, getUserFavLists);
router.post('/favitem',isAuthenticated, addFavItem);
router.get('/favs/:fav_id',isAuthenticated,getFavById);
router.delete('/favs/:fav_id',isAuthenticated,deleteFavById);

export default router;