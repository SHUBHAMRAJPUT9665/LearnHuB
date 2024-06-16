import { Router } from "express";
import {
  getRazorpayApiKey,
  buyScription,
  verifySubscription,
  cancelScription,
  allPayments,
} from "../controllers/payment.controller.js";

const router = Router();

router.route("/razorpay-key").get(getRazorpayApiKey);

router.route("/subscribe").post(buyScription);

router.route("/verify").post(verifySubscription);

router.route("/unsubscribe").post(cancelScription);

router.route("/").get(allPayments);

export default router;
