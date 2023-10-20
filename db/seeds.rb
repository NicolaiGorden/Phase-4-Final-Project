# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#USERS
User.create(username: "Luigi", password: "Ilovemybro")
User.create(username: "Sora", password: "Kingdomheartsislight")
User.create(username: "MasterChief", password: "Cortana")
User.create(username: "Toriel", password: "SnailpieGOATed")
User.create(username: "Monokuma", password: "Punishmenttime")

#GAMES
Game.create(guid:"3030-48579", name:"Rhythm Heaven Megamix", art:"https://www.giantbomb.com/a/uploads/original/8/82063/2896839-6215576118-SQ_3D.jpg")
Game.create(guid:"3030-43883", name:"Puyo Puyo Tetris", art:"https://www.giantbomb.com/a/uploads/original/8/85465/2912120-81fez0skvll._ac_sl1500_.jpg")
Game.create(guid:"3030-72014", name:"Apex Legends", art:"https://www.giantbomb.com/a/uploads/original/8/87790/3079288-box_al.png",)
Game.create(guid:"3030-19929", name:"Paper Mario", art:"https://www.giantbomb.com/a/uploads/original/8/87790/2108508-box_pm.png")
Game.create(guid:"3030-59383", name:"Slay the Spire", art:"https://www.giantbomb.com/a/uploads/original/8/87790/3103069-box_sts.png")

#REVIEWS
Review.create(title:"testreview1", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:1, game_id:5)
Review.create(title:"testreview2", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:1, game_id:1)
Review.create(title:"testreview3", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:2, game_id:5)
Review.create(title:"testreview4", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:2, game_id:2)
Review.create(title:"testreview5", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:3, game_id:3)
Review.create(title:"testreview6", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:3, game_id:4)
Review.create(title:"testreview7", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:4, game_id:1)
Review.create(title:"testreview8", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:4, game_id:2)
Review.create(title:"testreview9", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:5, game_id:2)
Review.create(title:"testreview10", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit leo. Maecenas condimentum ante eget tellus interdum sagittis. Fusce dictum neque magna, quis commodo elit venenatis et. Fusce scelerisque est quis mi mollis, eget dictum tortor.", likes:0, user_id:5, game_id:3)