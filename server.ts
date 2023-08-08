import express, { Express } from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const cors = require("cors");

// Routes
import { loginRouter } from "./routes/LoginRouter";
import { taskRouter } from "./routes/TaskRouter";

dotenv.config();

const app: Express = express();
const PORT = Number(process.env.PORT);

const swaggerOptions = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "JWT Test API",
      version: "0.0.1",
      description: "API to test authentication",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./routes/*.ts"],
};

const specs = swaggerJsdoc(swaggerOptions);

// Middleware
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

app.use(
  cors({
    origin: ["http://localhost:4000", "https://localhost:4000"],
  })
);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    swaggerOptions: {
      authActions: {
        bearerAuth: {
          name: "Authorization",
          schema: {
            type: "apiKey",
            in: "header",
            name: "Authorization",
            description: "",
          },
          value: "Bearer <JWT token>",
        },
      },
    },
  })
);

// Routes
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/task", taskRouter);

app.listen(PORT, () => {
  console.log(PORT);
});
