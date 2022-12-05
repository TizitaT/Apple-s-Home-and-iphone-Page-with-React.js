console.clear();
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
const corsOption = {
  origin: ["http://loclahost:3000", "http://loclahost:3001"],
};

// we have to allow react (port3000) to acess our data---cross origin resource sharing
app.use(cors(corsOption));

const { decrypt, crypt } = require("./cryptDecrypt");

var mysqlConnection = mysql.createConnection({
  user: "process.env.DB_USER",
  password: "process.env.DB_PASSWORD",
  host: "process.env.DB_HOST",
  database: "process.env.DB_DATABASE",
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log("Couldn't Connect");
  } else {
    console.log("Succesfuly Connected ");
  }
});

///  *****QUESTION TWO*******
app.get("/", (req, res) => {
  res.send("up and running");
});

// write query statments
app.get("/install", (req, res) => {
  // products table

  let createProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        
        PRIMARY KEY (product_id)
    )`;
  // product description table

  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int auto_increment,
      product_id int(11) not null,
      product_brief_description varchar(255) not null,
      product_description varchar(8000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci not null,
      product_img varchar(255) not null,
      product_link varchar(255) not null,

      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  // product price tabel
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
      price_id int auto_increment,
      product_id int(11) not null,    
      starting_price varchar(255) not null,
      price_range varchar(255) not null,

      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;

  // user table
  let createUser = `CREATE TABLE if not exists User(
        user_id int auto_increment,
        user_name varchar(25) not null,
        user_password varchar(25) not null,

        PRIMARY KEY (user_id)
    )`;

  // orders table
  let createOrders = `CREATE TABLE if not exists Orders(
        order_id int auto_increment,
        product_id int(11) not null,
        user_id int(11) not null,

        PRIMARY KEY (order_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id),
        FOREIGN KEY (user_id) REFERENCES User(user_id)
        )`;

  // execute query statments

  mysqlConnection.query(createProducts, (err) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err) => {
    if (err) {
      console.log(`Error Found:${err}`);
    }
  });

  mysqlConnection.query(createProductPrice, (err) => {
    if (err) {
      console.log(`Error Found:${err}`);
    }
  });

  mysqlConnection.query(createUser, (err) => {
    if (err) {
      console.log(`Error Found:${err}`);
    }
  });
  mysqlConnection.query(createOrders, (err) => {
    if (err) {
      console.log(`Error Found:${err}`);
    }
  });

  res.end("Tables Created");
  console.log("Tables Created");
});

app.get("/ela/:abebe", (req, res) => {
  console.log(req.params);
  res.send("hi may");
});
// ******QUESTION 3******

//MIDDLEWARE to parse body

app.use(express.urlencoded({ extended: true }));

// inserting in to database

app.post("/add-product", (req, res) => {
  console.table(req.body);
  // products table
  let product_url = req.body.producturl;
  let product_name = req.body.productname;
  // product_description table
  let product_brief_description = req.body.product_brief_description;
  let product_description = req.body.product_description;
  let product_img = req.body.product_img;
  let product_link = req.body.product_link;
  // ProductPrice table
  let starting_price = req.body.starting_price;
  let price_range = req.body.price_range;
  // //user table
  let User_name = req.body.User_name;
  let User_password = req.body.User_password;

  let insertProduct = `INSERT INTO products (product_url,product_name) VALUES ("${product_url}", "${product_name}") ;`;

  mysqlConnection.query(insertProduct, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
  });
  const selectPID = `SELECT product_id FROM products WHERE product_url = "${product_url}"`;

  mysqlConnection.query(selectPID, (err, result) => {
    // console.log(result);
    const PId = result[0].product_id;
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      let insert_product_des = `INSERT INTO ProductDescription(product_id,product_brief_description,product_description,product_img,product_link) VALUES ("${PId}","${product_brief_description}","${product_description}","${product_img}","${product_link}")`;

      let insert_Product_price = `INSERT INTO productprice(product_id,starting_price,price_range) VALUES ("${PId}","${starting_price}", "${price_range}") ;`;

      let crypedPass = crypt("key", User_password);

      let insert_user = `INSERT INTO user(user_name,user_password) VALUES ("${User_name}", "${crypedPass}") ;`;

      mysqlConnection.query(insert_product_des, (err) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
      });
      mysqlConnection.query(insert_Product_price, (err) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
      });
      mysqlConnection.query(insert_user, (err) => {
        if (err) {
          console.log(err);
          res.end(err);
        }
      });

      let selectUID = `SELECT user_id FROM user WHERE user_name = "${User_name}"`;

      mysqlConnection.query(selectUID, (err, result) => {
        console.log(result);
        const UID = result[0].user_id;
        if (err) {
          console.log(err);
          res.end(err);
        } else {
          let insert_order = `INSERT INTO orders(product_id,user_id) VALUES ("${PId}", "${UID}") ;`;
          mysqlConnection.query(insert_order, (err) => {
            if (err) {
              console.log(err);
              res.end(err);
            }
          });
        }
      });
    }
  });
  res.send("data inserted");
});

app.listen(1221, () => {
  console.log(`listening and running on http://localhost:${1221}`);
});

// for react class

app.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products INNER JOIN ProductDescription INNER JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows) => {
      let iphones = { products: [] };
      iphones.products = rows;
      // var stringIphones = JSON.stringify(iphones);
      if (!err) res.json(rows);
      else console.log(err);
    }
  );
});
