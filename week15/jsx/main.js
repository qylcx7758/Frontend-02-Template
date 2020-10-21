import {createElement} from "./framework.js"
import {Carsousel} from "./Carousel.js"
import {Button} from "./Button.js"
import {List} from "./List.js"

let cats = [
  {
      url: 'https://static001.geekbang.org/resource/image/d8/32/d846f329e073d0f7c8143da32a3ca832.jpg', 
      title: '白猫'
  }, 
  {
      url: 'https://static001.geekbang.org/resource/image/b4/26/b4ff997b68f16f882c255aef8c833626.jpg',
      title: '黄猫'
  }, 
  {
      url: 'https://static001.geekbang.org/resource/image/51/c0/5196d9fb7fcbbfb43450624045ae81c0.jpg', 
      title: '灰白猫'
  }, 
  {
      url: 'https://static001.geekbang.org/resource/image/97/bf/97fbdb46b8ad6550dcdb4aa4a062f0bf.jpg', 
      title: '黄白猫'
  }
]
//模板
let a = <List data={cats}>{(record) =>
	<div>
		<img src={record.img} />
		<a href={record.url}>{record.title}</a>
	</div>
}
</List>

let carousel = < Carousel src = {
  images
}
/>
carousel.mountTo(document.body)

