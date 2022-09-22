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
  { make: "Yikun", model: "Dragon Bi", color: "Blue", weight: 172, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/7123+gv4D1L._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Yikun", model: "Swift Zhu", color: "Red", weight: 155, disc_type: "Fairway Driver", img: "https://m.media-amazon.com/images/I/71tiI-VmyxL._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Discraft", model: "Buzzz", color: "White", weight: 177, disc_type: "Midrange", img: "https://m.media-amazon.com/images/I/61iREHqN-AL._AC_SL1000_.jpg", finder_key: Random.hex(3) },
  { make: "Divergent Discs", model: "Nuno", color: "Blue", weight: 174, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/711oqfM8ZXL._AC_SL1500_.jpg", lost: true, finder_key: Random.hex(3) },
  { make: "Dynamic Discs", model: "Prime Burst Judge", color: "Blue", weight: 170, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/71IjAsx2+uL._AC_SL1500_.jpg", finder_key: Random.hex(3) }
])

rose.discs.create([
  { make: "Innova", model: "DX Katana", color: "Purple", weight: 169, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/717bF75LGPL._AC_SL1200_.jpg", finder_key: Random.hex(3) },
  { make: "Latitude 64", model: "Royal Grand Rive", color: "Blue", weight: 174, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/61+r52IjERL._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Divergent Discs", model: "Leviathan", color: "Pink", weight: 168, disc_type: "Midrange", img: "https://m.media-amazon.com/images/I/71IQ8W4CnVL._AC_SL1500_.jpg", lost: true, finder_key: Random.hex(3) },
  { make: "Innova", model: "Star Mako3", color: "Orange", weight: 180, disc_type: "Midrange", img: "https://m.media-amazon.com/images/I/710bzbXtboL._AC_SL1280_.jpg", finder_key: Random.hex(3) },
  { make: "Streamline Discs", model: "Pilot", color: "Gray", weight: 169, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/61U9-sGTuzL._AC_SL1000_.jpg", finder_key: Random.hex(3) },
  { make: "Westside Discs", model: "BT Hard Maiden", color: "Gray", weight: 177, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/71lLM8uDk8L._AC_SL1500_.jpg", finder_key: Random.hex(3) }
])

kat.discs.create([
  { make: "Discmania", model: "Majesty", color: "Pink", weight: 165, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/61ZDBbHkiCL._AC_SL1024_.jpg", finder_key: Random.hex(3) },
  { make: "Yikun", model: "Swift Rong", color: "Red", weight: 157, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/71ksCncNL+L._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Innova", model: "Wraith", color: "Pink", weight: 167, disc_type: "Distance Driver", img: "https://m.media-amazon.com/images/I/712351x9xmL._AC_SL1191_.jpg", lost: true, finder_key: Random.hex(3) },
  { make: "Yikun", model: "Phoenix Star Yao", color: "Purple", weight: 176, disc_type: "Midrange", img: "https://m.media-amazon.com/images/I/7126DY7jQcL._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Viking Discs", model: "Storm Knife", color: "Green", weight: 175, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/71UcdiZRRoL._AC_SL1500_.jpg", finder_key: Random.hex(3) },
  { make: "Yikun", model: "Nature Yi", color: "Beige", weight: 170, disc_type: "Putter", img: "https://m.media-amazon.com/images/I/81vxxv1RBSL._AC_SL1500_.jpg", finder_key: Random.hex(3) }
])

puts "Seeding courses..."

nlc = Course.create(name: "North Lakes Creekside", location: "Denton, TX", holes: 18)
nll = Course.create(name: "North Lakes Lakeside", location: "Denton, TX", holes: 18)

puts "Seeding scores..."

tim.scores.create([
  { strokes: 60, par: 54, player: "Tim", course_id: nlc.id },
  { strokes: 62, par: 59, player: "Tim", course_id: nll.id }
])

rose.scores.create([
  { strokes: 56, par: 54, player: "Rose", course_id: nlc.id },
  { strokes: 66, par: 59, player: "Rose", course_id: nll.id }
])

kat.scores.create([
  { strokes: 53, par: 54, player: "Kat", course_id: nlc.id },
  { strokes: 59, par: 59, player: "Kat", course_id: nll.id }
])

puts "Seeding messages..."

kat.messages.create(subject: "Blue Nuno", body: "Hey Tim, I found your Nuno in the lake. When can you meet up to get it?", to: "Tim")

tim.messages.create(subject: "Pink Leviathan", body: "You missing a pink Leviathan? Found it at North Lakes.", to: "Rose")

tim.messages.create(subject: "Blue Nuno", body: "Oh, cool! I'm free next Monday afternoon. Jupiter House?", to: "Kat")

rose.messages.create(subject: "Pink Leviathan", body: "Yes! I'm actually at North Lakes right now, could you meet me at the picnic table near the start?", to: "Tim")

kat.messages.create(subject: "Blue Nuno", body: "I can be there at 1. Can't wait to hear how you sank a putter in the lake lol", to: "Tim")

puts "Done!"