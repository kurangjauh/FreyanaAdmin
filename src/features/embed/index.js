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

                {/* Typography*/}
              <h2 id="component1">Twitter</h2>
                <div> 
                    <div className="mockup-code mt-4">
                    <pre className='my-0 py-0'><code>{'<a class="twitter-timeline" data-lang="en" data-dnt="true" data-theme="dark" href="https://twitter.com/Freya_JKT48?ref_src=twsrc%5Etfw">Tweets by Freya_JKT48</a>\n <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'}</code></pre>
                    </div>
                </div>


                 {/* Form Input*/}
              <h2 id="component2">Form Input</h2>
                <p>
                      Many times we have to use form input like text, select one or toogle and in every file we have to handle its state management, here we have added global form component that can be used in any file and state variables can be managed by passing props to it. It is present in <span className="badge mt-0 mb-0 badge-ghost">/components/Input</span> folder. 
                </p>
                Ex- 
                <div className="mockup-code mt-4">
                    <pre className='my-0 py-0'><code>{'const INITIAL_LEAD_OBJ = {\n   first_name : "", \n   last_name : "", \n   email : "" \n  } \n   const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ) \n   const updateFormValue = ({updateType, value}) => {\n    setErrorMessage("") \n    setLeadObj({...leadObj, [updateType] : value})\n   }\n\n<InputText type="text" defaultValue={leadObj.first_name}  \n  updateType="first_name" containerStyle="mt-4"  \n  labelTitle="First Name" updateFormValue={updateFormValue}/>'}</code></pre>
                </div>
                

               <p> This example is from add new lead modal, here we are importing component for creating text input and passing some props to handle its content and state variable. Description of props are as follows - </p>
                <ul>
                  <li><span className='font-bold'>type</span> - Input type value like number, date, time etc.. </li>
                  <li><span className='font-bold'>updateType</span> - This is used to update state variable in parent component</li>
                  <li><span className='font-bold'>containerStyle</span> - Style class for container of input, which include label as well</li>
                  <li><span className='font-bold'>labelTitle</span> - Title of the label</li>
                  <li><span className='font-bold'>updateFormValue</span> - Function of parent component to update state variable</li>
                </ul>
            



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