import React from 'react'

import UserTemplate from '../../components/templates/UserTemplate'
import Block from '../../components/molecules/Block'

import ChrisImage from '../../assets/images/chris.jpg'

const images = [
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96052409_781471309047528_6128193458571563857_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=gt9H79ZHBoQAX9CPa_x&oh=5dfc4939f3af3dfe79e8e7de9d5dd95b&oe=5F352453',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/74899892_2375938672535537_7859930332251091581_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=sXU60_PQmjQAX-0eud5&oh=0cfe093fabba4512bf34115ee9e46f11&oe=5F32736F',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96758620_2977154258998053_5444227488389935772_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=OMzFN76LAFgAX-uKakz&oh=d50ff338aaa28499ca8f4eb3d8bed97d&oe=5F32560C',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/101017322_594053594551235_6921696636337437779_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=W91x1rVRVksAX8ZzsG-&oh=95ee0b056dcdec7120824ea594511d7c&oe=5F32D746',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/107275299_281834726463152_4032760120906150841_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=DGx_xM1vhgkAX9r28Pg&oh=5dafbfcf0bb1376786fde931eb9130a1&oe=5F326653',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/106563506_277258970145742_4285637264379714768_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=jftaQR9wAd4AX9lAjWb&oh=dbd212d96832b0742ee8ff8cb5efbd39&oe=5F343915',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/106196902_2973146066147943_8123961963606640038_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=KzRU4ekZIIIAX_icLO7&oh=48a1697428e5c9f73fc540534a4310a7&oe=5F341D4B',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/106195703_761017054656294_6704757131077863612_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=4tj9sram9uoAX9Pgcg0&oh=fc0ec2680660a22fb04aa2dd74c4fe54&oe=5F35731F',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/103990425_565430670810110_1820854223232294677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=T1voVTHjE5oAX9Vj1QJ&oh=0f6235d7edcceb06c9c053691068dbc7&oe=5F32EB92',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/69474849_206757823662328_2993283546100466212_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=TDwjQZp7ShoAX8xLAuK&oh=7fa0019491e31cd4b6bfb0949498a17c&oe=5F356E7A',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/73183709_101992624569619_1045918818249280677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=s_lw7yROgd4AX-SK9pU&oh=6249d8e8098c40db1860f2323caa6202&oe=5F319F6D',
  'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/73127477_734800073669763_3622847312131328439_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=on3elBdJoDQAX825zMp&oh=b5e3de21fd789ccf3ebf2d967202211a&oe=5F332608',
]

const User: React.FC = () => {
  const profile = {
    name: '크리스',
    image: ChrisImage,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    postCount: 300,
    followerCount: 347,
    followCount: 743,
  }
  const stories: any[] = []
  const postList = []

  for (let row = 0; row < 10; row++) {
    const row = []
    for (let col = 0; col < 3; col++) {
      row.push({
        thumbnail: images[Math.floor(Math.random() * 12)],
      })
    }
    postList.push(row)
  }

  return (
    <Block>
      <UserTemplate profile={profile} stories={stories} postList={postList} />
    </Block>
  )
}

export default User
