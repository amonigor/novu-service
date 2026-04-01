import "dotenv/config";
import express, { type Request, type Response } from "express";
import { Novu } from "@novu/api";

const app = express();
app.use(express.json());

const novu = new Novu({
  secretKey: process.env.NOVU_SECRET_KEY!,
});

interface TriggerBody {
  subscriberId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  payload?: Record<string, unknown>;
}

app.post(
  "/trigger",
  async (req: Request<object, object, TriggerBody>, res: Response) => {
    const { subscriberId, firstName, lastName, email, payload = {} } = req.body;

    try {
      const result = await novu.trigger({
        workflowId: "test-notification",
        to: {
          subscriberId: subscriberId || "",
          firstName: firstName || "",
          lastName: lastName || "",
          email: email || "",
        },
        payload,
      });

      res.json({ success: true, data: result });
    } catch (error: any) {
      res.status(error.statusCode ?? 500).json({
        success: false,
        error: error.message,
        body: error.body,
      });
    }
  },
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // Server running on port
});
