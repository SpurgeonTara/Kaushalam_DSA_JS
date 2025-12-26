const express = require("express");

const app = express();

// express usage.
app.use(express.json());

app.use(
  "/api/v2/images/logos",
  express.static(path.join(__dirname, "images", "logos"))
);
const callback = (req, res, next) => {};
app.use(callback);
app.get("path", callback);
app.post("path", callback);
app.put("path", callback);
app.delete("path", callback);
app.all("path, callback");
app.listen(3001, () => {
  console.log("Server Stareed Successfully");
});

// dotenv usage
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// cookieParser Usage
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// sending token as A http-only cookie
const options = {
  expires: new Date(
    Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
};

if (process.env.NODE_ENV === "production") {
  options.secure = true;
}

res.status(statusCode).cookie("token", token, options).json({
  success: true,
  token,
});
// Subsequent requests from frontend:
fetch("https://your-api-endpoint.com/resource", {
  method: "GET",
  credentials: "include", // Include cookies in the request
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
// Express middleware to read the httpOnly cookie and set it as Authorization header
app.use((req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  next();
});
// auth middleware
const authenticate = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, "your-secret-key");
    const { userId, username } = decoded;
    const user = await User.findOne({ _id: userId });
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

// Using Express Router:
app.use("/api/v2", apiRoutes);
// In apiRoutes file
app.use("/users", userRoutes);
// In userRoutes
const userRouter = express.Router();
userRouter.get("/:id", getUser);
userRouter.post("/:id", postUser);
userRoutes.delete("/:id", deleteUser);
userRoutes.put("/:id", putUser);
userRoutes.patch("/:id", patchUser);

// bcrypt usage
const bcrypt = require("bcrypt");

const hashedPassword = await bcrypt.hash(password, 12);
const isValidPassword = await bcrypt.compare(incomingPassword, savedPassword);

// JWT Usage
const jwt = require("jsonwebtoken");
// signing up:
const tokenObj = { firstName, lastName, email, password };
const token = jwt.sign(tokenObj, process.env.JWT_ACCOUNT_ACTIVATION, {
  expiresIn: "10m",
});
jwt.verify(
  token,
  process.env.JWT_ACCOUNT_ACTIVATION,
  async function (err, decoded) {
    if (err) {
      //   handle errors
    }
    // send success response
  }
);
// logging in
const tokenLogin = jwt.sign(
  {
    userId: userFound[0].id,
    email: userFound[0].email,
    role: userFound[0].role,
  },
  process.env.JWT_KEY,
  { expiresIn: "7d" }
);

const decodedToken = jwt.verify(token, process.env.JWT_KEY);
const userId = decodedToken.userId;
const email = decodedToken.email;
const role = decodedToken.role;

// SESSIONS

const session = require("express-session");
// using connect-mongodb-session
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: "sessions",
});
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
// Using connect-mongo
const MongoStore = require("connect-mongo");
app.use(
  session({
    secret: "your-secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "your-mongodb-url",
      collectionName: "sessions",
      ttl: 24 * 60 * 60,
    }),
  })
);
// middleware to add user if session exists on the request
app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch((err) => {
      next(new Error(err));
    });
});
// setting sessions isLoggedIn to true to create sessions in db
const isPasswordMatched = await bcrypt.compare(
  req.body.password,
  user.password
);

if (isPasswordMatched) {
  req.session.isLoggedIn = true;
  req.session.user = user;
  return req.session.save((err) => {
    res.redirect("/blog");
  });
} else {
  return res.status(422).render("auth/login", {
    pageTitle: "Login",
    errorDetails: [
      {
        value: null,
        msg: "Credentials Donot Match!",
        param: "",
        location: "body",
      },
    ],
    oldDetails: null,
    isAuthenticated: false,
  });
}

// Checking weather any session exists or not:
// just get as req.session.isLoggedIn
res.status(200).render("blog/home.ejs", {
  pageTitle: "Home",
  isAuthenticated: req.session.isLoggedIn,
});

// Error Handling
app.use((err, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      if (err) {
        logger.error(err.message);
      }
    });
  }
  if (res.headerSent) {
    return next(err);
  }

  const statusCode = err.statusCode;
  const message = err.message;
  // const data = err.data;
  res.status(statusCode).json({
    message: message || "An unknown error occurred!",
    // data: data,
    // err: err.stack,
    // stack: err.actualError,
  });
});

// calling this error middleware
try {
  if (somethingWrong) {
    throw new Error("Something Went Wrong!");
  }
} catch (error) {
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  return next(error);
}

// Pagination

// with MySQL:
const ITEMS_PER_PAGE = 10;
const page = +req.query.page || 1;
let LIMIT = (page - 1) * ITEMS_PER_PAGE;
count = posts.length === 0 ? 1 : posts.length;
let numberOfPages = Math.ceil(count / ITEMS_PER_PAGE);
if (page > numberOfPages || page < 1) {
  const error = new Error("The Page You Requested doesn't found");
  error.statusCode = 401;
  logger.error(error.message);
  return next(error);
}
[filteredPosts] = await db.execute(
  `
    select 
      p.id,
      p.title,
      p.titleSlug,
      p.isPublished,
      p.userId,
      p.created_at,
      p.updated_at,
      s.name AS series_name,
      c.name AS category_name,
      (select count(*) from post_likes_b508158a_fd80_4f50_a6d7_3d9294cab2b6 pl where pl.postId = p.id) as total_likes,
      (select count(*) from post_comments_4fd53fce_583a_4f70_a76a_82dfbd643ce3 pc where pc.postId = p.id) as total_comments,
      (select count(*) from post_views_a3de5492_1c4c_421e_95a4_79570b15e372 pv where pv.postId = p.id) as total_views
    from 
    posts_f530b753_64f3_451a_9f6e_b78e5b545471 p
    LEFT JOIN
    series_2b9c8a7e_d8d8_4505_a7ad_2593c6e27687 s
    ON
      s.id = p.seriesId
    LEFT JOIN
    categories_4c2b9740_ad81_4fae_b081_877f69a83cd9 c
    ON
      c.id = p.categoryId
    ORDER BY
      ${orderBy} DESC, p.created_at DESC
    LIMIT ${LIMIT}, ${ITEMS_PER_PAGE}
  `
);

// with Mongo:
const pageNum = parseInt(args.pageNum);
const ITEMS_PEr_PAGE = 1;
let SKIP = (pageNum - 1) * ITEMS_PER_PAGE;

const pipeline3 = [
  {
    $lookup: {
      from: "categories", // Your Category collection name
      localField: "categoryId",
      foreignField: "_id",
      as: "category",
    },
  },
  {
    $lookup: {
      from: "brands", // Your Brand collection name
      localField: "brandId",
      foreignField: "_id",
      as: "brand",
    },
  },
  {
    $match: {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
        {
          $and: [
            {
              $or: categoriesOr,
            },
            {
              "brand.name": { $in: terms },
            },
          ],
        },
      ],
    },
  },
  // {
  //   $unwind: "$variants", // Unwind the variants array
  // },
  // {
  //   $group: {
  //     _id: "$category.name", // Group by category name
  //     products: { $push: "$$ROOT" }, // Collect the matching products in an array
  //   },
  // },
  // {
  //   $sort: {
  //     _id: 1, // Sort by category name in ascending order
  //   },
  // },
  {
    $skip: SKIP, // Skip the first 10 documents
  },
  {
    $limit: ITEMS_PER_PAGE, // Limit the result set to a maximum of 20 documents
  },
];

// Another way with Mongo:
const page1 = parseInt(req.query.page, 10) || 1;
const limit = parseInt(req.query.limit, 10) || 25;
const startIndex = (page1 - 1) * limit;
const endIndex = page1 * limit;
const total = await model.countDocuments();

query = query.skip(startIndex).limit(limit);

// Using MYSQL with Node

await db.execute(
  `UPDATE posts_f530b753_64f3_451a_9f6e_b78e5b545471 SET userId = ? WHERE userId = ?`,
  [superBot[0].id, userId]
);

await db.execute(
  `DELETE FROM followers_bfbc3f0b_6f5e_4125_8de7_2247969677b3 WHERE followerId = ? OR followeeId = ?`,
  [userId, userId]
);

dbQuery = `INSERT INTO users_38c48237_8d03_4fdc_88a1_b1cb1347cca1 (firstName, lastName, email, password, role, profilePhoto, loginPlatform) VALUES(?, ?, ?, ?, ?, ?, ?)`;
dbDependencies = [
  firstName,
  lastName,
  email,
  hashedPassword,
  role || "user",
  profilePhoto,
  "local",
];

// Using MongoDB
const User = require("./models/User");

// Create a new user document
const newUser = new User({
  username: "john_doe",
  email: "john@example.com",
  // Other fields...
});

// Save the new user to the database
newUser
  .save()
  .then((user) => {
    console.log("User created:", user);
  })
  .catch((err) => {
    console.error("Error creating user:", err);
  });

const User = require("./models/User");

// Find all users
User.find()
  .then((users) => {
    console.log("All users:", users);
  })
  .catch((err) => {
    console.error("Error finding users:", err);
  });

// Find users with specific criteria
User.find({ username: "john_doe" })
  .then((users) => {
    console.log('Users with username "john_doe":', users);
  })
  .catch((err) => {
    console.error("Error finding users:", err);
  });

// Find a single user by ID
User.findById("user_id_here")
  .then((user) => {
    console.log("User by ID:", user);
  })
  .catch((err) => {
    console.error("Error finding user by ID:", err);
  });

const User = require("./models/User");

// Update a single document
User.findOneAndUpdate(
  { username: "john_doe" },
  { email: "john_updated@example.com" },
  { new: true } // To return the updated document
)
  .then((updatedUser) => {
    console.log("Updated user:", updatedUser);
  })
  .catch((err) => {
    console.error("Error updating user:", err);
  });

// Update multiple documents
User.updateMany({ isActive: true }, { $set: { status: "active" } })
  .then((result) => {
    console.log("Updated documents:", result);
  })
  .catch((err) => {
    console.error("Error updating documents:", err);
  });

// Delete documents:
const User = require("./models/User");

// Delete a single document
User.findOneAndDelete({ username: "john_doe" })
  .then((deletedUser) => {
    console.log("Deleted user:", deletedUser);
  })
  .catch((err) => {
    console.error("Error deleting user:", err);
  });

// Delete multiple documents
User.deleteMany({ isActive: false })
  .then((result) => {
    console.log("Deleted documents:", result);
  })
  .catch((err) => {
    console.error("Error deleting documents:", err);
  });

// Aggregation pipeline:
const pipeline = [
  {
    $match: {
      _id: new ObjectId(productId),
    },
  },
  {
    $lookup: {
      from: "categories", // Your Category collection name
      localField: "categoryId",
      foreignField: "_id",
      as: "category",
    },
  },
  {
    $lookup: {
      from: "brands", // Your Brand collection name
      localField: "brandId",
      foreignField: "_id",
      as: "brand",
    },
  },
  {
    $lookup: {
      from: "variants", // Your Category collection name
      localField: "variantId",
      foreignField: "_id",
      as: "variant",
    },
  },
  {
    $lookup: {
      from: "users", // Your Category collection name
      localField: "userId",
      foreignField: "_id",
      as: "seller",
    },
  },
  {
    $addFields: {
      category: { $arrayElemAt: ["$category", 0] },
      brand: { $arrayElemAt: ["$brand", 0] },
      variant: { $arrayElemAt: ["$variant", 0] },
      seller: { $arrayElemAt: ["$seller", 0] },
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      description: 1,
      categoryId: 1,
      category: 1,
      brandId: 1,
      brand: 1,
      variantId: 1,
      variant: 1,
      variants: 1,
      userId: 1,
      "seller._id": 1,
      "seller.fullName": 1,
      "seller.email": 1,
      "seller.phoneNumber": 1,
      createdAt: 1,
      updatedAt: 1,
    },
  },
];

const pipeline1 = [
  ...optionalStages,
  {
    $lookup: {
      from: "categories", // Your Category collection name
      localField: "categoryId",
      foreignField: "_id",
      as: "category",
    },
  },
  {
    $lookup: {
      from: "brands", // Your Brand collection name
      localField: "brandId",
      foreignField: "_id",
      as: "brand",
    },
  },
  {
    $lookup: {
      from: "variants", // Your Category collection name
      localField: "variantId",
      foreignField: "_id",
      as: "variant",
    },
  },
  {
    $addFields: {
      category: { $arrayElemAt: ["$category", 0] },
      brand: { $arrayElemAt: ["$brand", 0] },
      variant: { $arrayElemAt: ["$variant", 0] },
    },
  },
  {
    $match: {
      $and: [
        { availabilityStatus: true },
        {
          $or: [
            { name: { $regex: searchTerm, $options: "i" } },
            { description: { $regex: searchTerm, $options: "i" } },
            {
              $and: [
                {
                  $or: categoriesOr,
                },
                {
                  "brand.name": { $in: terms },
                },
              ],
            },
          ],
        },
      ],
    },
  },
  // {
  //   $unwind: "$variants", // Unwind the variants array
  // },
  // {
  //   $group: {
  //     _id: "$category.name", // Group by category name
  //     products: { $push: "$$ROOT" }, // Collect the matching products in an array
  //   },
  // },
  {
    $project: {
      _id: 1,
      name: 1,
      description: 1,
      categoryId: 1,
      category: 1,
      brandId: 1,
      brand: 1,
      variantId: 1,
      variant: 1,
      variants: 1,
      userId: 1,
      createdAt: 1,
      updatedAt: 1,
    },
  },
  {
    $sort: {
      _id: -1, // Sort by category name in ascending order
    },
  },
  {
    $limit: ITEMS_PER_PAGE + 1, // Limit the result set to a maximum of 20 documents
  },
];

const Transaction = require("./models/Transaction");

// Aggregate pipeline to group transactions by type and get the count
Transaction.aggregate([
  {
    $group: {
      _id: "$type", // Field to group by
      totalTransactions: { $sum: 1 }, // Calculate the count of documents in each group
    },
  },
])
  .then((result) => {
    console.log("Grouped transactions:", result);
  })
  .catch((err) => {
    console.error("Error aggregating transactions:", err);
  });

// MULTER:
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const slugify = require("slugify");

const RESOURCE_MIME_TYPE_MAP = {
  "application/x-zip-compressed": "zip",
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const uploadAFile = (dir = "images") => {
  return multer({
    limits: 500000,
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, dir);
      },
      filename: (req, file, cb) => {
        let finalFileName = "dummy.png";
        const maxFileNameLength = 255;
        const uuid = uuidv4();
        const ext = MIME_TYPE_MAP[file.mimetype];
        const rawFileName = file.originalname;

        const extIndex = rawFileName.lastIndexOf(".");
        const uuidLength = uuid.length + 1;

        // You Can dynamically find the extention as shown below(Usefull when you upload other file formats and donno the file format)
        // const ext = extIndex >= 0 ? fileName.slice(extIndex) : '';

        const nameWithoutExt =
          extIndex >= 0 ? rawFileName.slice(0, extIndex) : rawFileName;

        const imageSlug = slugify(nameWithoutExt, {
          replacement: "-",
          // remove: /[^a-zA-Z0-9-]/g,
          replace: /[-\s]+/g,
          strict: true,
          lower: true,
        });

        if (imageSlug.length + uuidLength > maxFileNameLength) {
          const truncatedImageSlug = imageSlug.slice(
            0,
            maxFileNameLength - uuidLength - (ext.length + 1)
          );
          finalFileName = `${truncatedImageSlug}-${uuid}.${ext}`;
        } else {
          finalFileName = `${imageSlug}-${uuid}.${ext}`;
        }

        cb(null, finalFileName);
      },
    }),
    fileFilter: (req, file, cb) => {
      const isValid = !!MIME_TYPE_MAP[file.mimetype];
      let error = isValid ? null : new Error("Invalid mime type!");
      cb(error, isValid);
    },
  });
};

module.exports = uploadAFile;

adminRoutes.post(
  "/insert/user",
  uploadAFile("images/profiles").single("image"),
  isAuth,
  isBlocked,
  isAdmin,
  insertUser
);

// using:
const profilePhoto = req?.file?.path;
