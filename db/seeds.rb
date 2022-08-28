# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Clearing database..."

User.destroy_all
Disc.destroy_all
Course.destroy_all
Score.destroy_all

puts "Seeding users..."

tim = User.create(username: 'Tim', password: 'tim123')
rose = User.create(username: 'Rose', password: 'rose123')
kat = User.create(username: 'Kat', password: 'kat123')

puts "Seeding discs..."

tim.discs.create([
  { make: "Innova", model: "GStar Boss", color: "Pink", weight: 173, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/61D2XI+WGyL._AC_SL1000_.jpg" , finder_key: Random.hex(3) },
  { make: "Discraft", model: "Buzzz", color: "White", weight: 177, disc_type: "Mid-Range", img: "https://m.media-amazon.com/images/I/61iREHqN-AL._AC_SL1000_.jpg", finder_key: Random.hex(3) },
  { make: "Dynamic Discs", model: "Prime Burst Judge", color: "Blue", weight: 170, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/71IjAsx2+uL._AC_SL1500_.jpg", finder_key: Random.hex(3) }
])

rose.discs.create([
  { make: "Innova" , model: "DX Katana", color: "Purple", weight: 169, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/717bF75LGPL._AC_SL1200_.jpg", finder_key: Random.hex(3) },
  { make: "Divergent Discs", model: "Leviathan", color: "Pink", weight: 168, disc_type: "Mid-Range", img: "https://m.media-amazon.com/images/I/71IQ8W4CnVL._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Westside Discs", model: "BT Hard Maiden", color: "Gray", weight: 177, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/71lLM8uDk8L._AC_SL1500_.jpg", finder_key: Random.hex(3) }
])

kat.discs.create([
  { make: "Discmania", model: "Majesty", color: "Pink", weight: 165, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/61ZDBbHkiCL._AC_SL1024_.jpg", finder_key: Random.hex(3) },
  { make: "Yikun", model: "Phoenix Star Yao", color: "Purple", weight: 176, disc_type: "Mid-Range", img: "https://m.media-amazon.com/images/I/7126DY7jQcL._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Viking Discs", model: "Storm Knife", color: "Green", weight: 175, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/71UcdiZRRoL._AC_SL1500_.jpg", finder_key: Random.hex(3) }
])

puts "Seeding courses..."

nlc = Course.create(name: "North Lakes Creekside", location: "Denton, TX", holes: 18)
nll = Course.create(name: "North Lakes Lakeside", location: "Denton, TX", holes: 18)

puts "Seeding scores..."

tim.scores.create([
  { strokes: 60, par: 54, course_id: nlc.id },
  { strokes: 62, par: 59, course_id: nll.id }
])

rose.scores.create([
  { strokes: 56, par: 54, course_id: nlc.id },
  { strokes: 66, par: 59, course_id: nll.id }
])

kat.scores.create([
  { strokes: 53, par: 54, course_id: nlc.id },
  { strokes: 59, par: 59, course_id: nll.id }
])

puts "Seeding messages..."

kat.messages.create(subject: "Purple Star Shryke", body: "Hey Tim, I found your Star Shryke in the lake. When can you meet up to get it?", to: "Tim")

tim.messages.create(subject: "Purple Underworld", body: "You missing a purple Underworld? Found it at North Lakes.", to: "Rose")

tim.messages.create(subject: "re: Purple Star Shryke", body: "Oh, cool! I'm free next Monday afternoon. Jupiter House?", to: "Kat")

rose.messages.create(subject: "re: Purple Underworld", body: "I'm actually at North Lakes right now, could you meet me at the picnic table near the start?", to: "tim")

puts "Done!"