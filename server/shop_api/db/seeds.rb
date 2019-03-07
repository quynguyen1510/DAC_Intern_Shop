# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Role.create!(role_name: "admin")
# User.create!(first_name: "admin", last_name: "123", email: "admin@gmail.com", password: "123456", password_confirmation: "123456", role_id: "1")

Category.create!(catname: "Mobile");
Category.create!(catname: "Clothes");
Category.create!(catname: "Computer");
Category.create!(catname: "Sport");

15.times do 
  Product.create!(
  product_name: "Apple Iphone X",
  product_desc: "Sản phẩm màn hình tai thỏ",
  price:"2000000",
  product_img: "https://cdn.khacten.com/wp-content/uploads/2017/11/iPX-d%C3%A1n-da-b%C3%B2-64.jpg",
  category_id: 1,
  user_id: 1
)
end

15.times do 
    Product.create!(
    product_name: "Samsung Galaxy S8",
    product_desc: "Sản phẩm của Samsung",
    price:"1000000",
    product_img: "https://cdn.tgdd.vn/Products/Images/42/78479/samsung-galaxy-s8-4-400x460-400x460.png",
    category_id: 1,
    user_id: 1
  )
end

15.times do 
    Product.create!(
    product_name: "Nón Gucci",
    product_desc: "Sản phẩm của Gucci Fashion",
    price:"500000",
    product_img: "https://media.gucci.com/style/DarkGray_Center_0_0_650x650/1519402505/200035_KQWBG_9791_001_100_0000_Light-Original-GG-canvas-baseball-hat-with-Web.jpg",
    category_id: 2,
    user_id: 1
  )
end

15.times do 
    Product.create!(
    product_name: "Túi xách LV",
    product_desc: "Sản phẩm của Louis Vuiton",
    price:"50000000",
    product_img: "https://thoitrangmusthave.com/wp-content/uploads/2018/01/T%C3%BAi-x%C3%A1ch-louis-vuitton-hang-hieu-montage-size-26-cm-fake-1.jpg",
    category_id: 2,
    user_id: 1
  )
end

15.times do 
    Product.create!(
    product_name: "Ram Kingston",
    product_desc: "Sản phẩm của Kingston",
    price:"1500000",
    product_img: "https://ae01.alicdn.com/kf/HTB1REpllLJNTKJjSspoq6A6mpXa5/Kingston-RAM-DDR3-ram-1600-mhz-G-c-CL11-204-pin-4-gam-8-gb-Intel.jpg",
    category_id: 3,
    user_id: 1
  )
end

15.times do 
    Product.create!(
    product_name: "Màn hình Dell",
    product_desc: "Sản phẩm của Dell",
    price:"2500000",
    product_img: "https://phucanhcdn.com/media/product/28340_dell_s2418h.jpg",
    category_id: 3,
    user_id: 1
  )
end

15.times do 
    Product.create!(
    product_name: "Áo thi đấu Real Marid",
    product_desc: "Sản phẩm của Real Marid",
    price:"50000",
    product_img: "https://www.sporter.vn/wp-content/uploads/2018/07/Ao-real-san-nha-1.jpg",
    category_id: 4,
    user_id: 1
  )
end

15.times do 
    Product.create!(
    product_name: "Vợt tennis",
    product_desc: "vợt Tennis siêu ngon",
    price: "3500000",
    product_img: "http://sieuthitennis.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/r/wrt73391u.jpg",
    category_id: 4,
    user_id: 1
  )
end












