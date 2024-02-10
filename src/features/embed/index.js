import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import TitleCard from '../../components/Cards/TitleCard'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function EmbedPage(){
    return(
        <>
        <article className="prose">
              <h1 className="" >Embed</h1>

                Untuk sementara, embed hanya tersedia untuk 2 media sosial : Twitter dan Tiktok. Untuk embed Instagram, sedang diolah kembali karena yang bersangkutan menon-aktifkan embed Instagram profile.

                {/* Twitter / X*/}
              <h2 id="component1">Twitter</h2>
                <div> 
                    <div className="mockup-code mt-4">
                    <pre className='my-0 py-0'><code>{'<a class="twitter-timeline" data-lang="en" data-dnt="true" data-theme="dark" href="https://twitter.com/Freya_JKT48?ref_src=twsrc%5Etfw">Tweets by Freya_JKT48</a>\n <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'}</code></pre>
                    </div>
                </div>


                 {/* Form Input*/}
              <h2 id="component2">Tiktok</h2>
              <div> 
                    <div className="mockup-code mt-4">
                    <pre className='my-0 py-0'><code>{'<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@freyajkt48" />\n data-unique-id="freyajkt48" data-embed-from="embed_page" data-embed-type="creator" style="max-width: 780px; min-width: 288px;" > <section> <a target="_blank" href="https://www.tiktok.com/@freyajkt48?refer=creator_embed">@freyajkt48</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>'}</code></pre>
                    </div>
                </div>

                 {/* Cards */}
                 <h2 id="component3">Cards</h2>
                <p>
                    <a href="https://daisyui.com/components/card/" target="_blank">Daisy UI</a> already have many cards layout, on top of that we have added one card component that accept title props and shows children inside its body. Also there is a divider between title and body of card. On more provision has been added to add buttons on top left side of card using TopSideButtons props (check leads page).

                </p>
                Ex - 
                <div className="mockup-code mt-4">
                    <pre className='my-0 py-0'><code>{'<TitleCard title={"Card Title"}> <h1>Card Body</h1></TitleCard>'}</code></pre>
                </div>
                <div className='p-8 bg-base-300 rounded-lg mt-4'>
                    <TitleCard title={"Card Title"}> <h1>Card Body</h1></TitleCard>
                </div>


                 

                    <div className='h-24'></div>


            </article>
        </>
    )
}

export default EmbedPage