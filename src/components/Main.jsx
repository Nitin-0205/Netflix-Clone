import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css'

function Main(){
    return(
        <main>
            <section className = "hero">
                <div className = "hero_background_container">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt = "Background image"
                    className = "hero_bg_img"></img>
                </div>
                <div className = "hero_bg_overlay"></div>
                <div className = 'hero_text_container'>
                    <h1>Unlimited movies, TV <br/>shows and more.</h1>
                    <p className = "hero_text_title">Watch anywhere. Cancel anytime.</p>
                    <p className= "hero_text_descript">Ready to watch? Enter your email<br/> to create or restart your <br/> membership.</p>
                    
                    <div className = 'form_container'>
                        <div className ='email_input_contain'>
                            <input  type="email" className = 'email_input' placeholder =""></input>
                            <label className = "email_label">Email Address</label>
                        </div>
                        <div>
                            <button className="email_button">
                                Get Started &gt;
                            </button>
                        </div>
                    </div>

                    
                </div>

            </section>
            
            <section className="features">
                <div className="features_detail">
                    <div>
                        <h3 className="feature_title">Enjoy on your TV.</h3>
                        <h5 className="feature_sub_title">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
                    </div>
                </div>

                <div className="features_img_container">

                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                        className="feature_img"
                        alt="Feature Image" ></img>

                    <div className="features_video_container">
                        <video
                            autoPlay="{true}" loop="{true}" muted="{true}"
                            className="feature_background_video">
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                                type="video/mp4" /></video>
                    </div>
                </div>
            </section>
        
            {/* feature 2 */}
            <section className="features">
                <div className="features_detail">
                    <div >
                        <h3 className="feature_title">Download your shows to watch offline.</h3>
                        <h5 className="feature_sub_title">Save your favourites easily and always have something to watch.</h5>
                    </div>
                </div>

                <div className="features_img_container">
                    <div className = "features_2_img_container">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                        className="feature_img"
                        alt="Feature Image" ></img>
                    </div>
                    
                    <div className="features_2_image_poster">
                        <div className="poster_container">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                                className="poster_container_img" />
                        </div>
                        <div className="features_2_image_detail">
                            <h5>Stranger Things</h5>
                            <h6>Downloading...</h6>
                        </div>
                        <div className="features_2_image_gif_container">
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                                alt="download Gif" className="features_2_image_gif"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* feature 3 */}
            <section className="features">
                <div className="features_detail">
                    <div>
                        <h3 className="feature_title">Watch everywhere.</h3>
                        <h5 className="feature_sub_title">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h5>
                    </div>
                </div>

                <div className="features_img_container">

                    <img 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                        className="feature_img"
                        alt="Feature Image" ></img>

                    <div className="features_video_container">
                        <video
                            autoPlay="{true}" loop="{true}" muted="{true}"
                            className="feature_background_video">
                            <source 
                                 src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                                 type="video/mp4" /></video>
                    </div>
                </div>
            </section>

            {/* feature 4 */}
            <section className="features">
                <div className="features_detail">
                    <div>
                        <h3 className="feature_title">Create profiles for children.</h3>
                        <h5 className="feature_sub_title">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h5>
                    </div>
                </div>

                <div className="features_img_container">

                    <img 
                        src="https://occ-0-4023-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
                        className="feature_img"
                        alt="Feature Image" ></img>

                    <div className="features_video_container">
                        <video autoPlay="{true}" loop="{true}" muted="{true}" className="feature_background_video">
                            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                            type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            <section className = "FAQ_question_sec">
                <div className = "FAQ_contain">
                    <h1>Frequently Asked Questions</h1>

                    <details className = 'FAQ_list'>
                        <summary className  = "FAQ_accordance">
                            What is Netflix? <FontAwesomeIcon icon={faPlus} />
                        </summary>
                        <div className= "FAQ_visible">
                           <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                    </details>

                    <details className = 'FAQ_list'>
                        <summary className  = "FAQ_accordance">
                            How much does Netflix cost? <FontAwesomeIcon icon={faPlus} />
                        </summary>
                        <div className= "FAQ_visible">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</p>
                        </div>
                    </details>

                    <details className = 'FAQ_list'>
                        <summary className  = "FAQ_accordance">
                            Where can I watch? <FontAwesomeIcon icon={faPlus} />
                        </summary>
                        <div className= "FAQ_visible">
                        <p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br/><br/>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </details>

                    <details className = 'FAQ_list'>
                        <summary className  = "FAQ_accordance">
                            How do I cancel? <FontAwesomeIcon icon={faPlus} />
                        </summary>
                        <div className= "FAQ_visible">
                           <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </details>

                    <details className = 'FAQ_list'>
                        <summary className  = "FAQ_accordance">
                           What can I watch on Netflix?  <FontAwesomeIcon icon={faPlus} />
                        </summary>
                        <div className= "FAQ_visible">
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </details>

                    <details className = 'FAQ_list'>
                        <summary className  = "FAQ_accordance">
                            Is Netflix good for kids?  <FontAwesomeIcon icon={faPlus} />
                        </summary>
                        <div className= "FAQ_visible">
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                <br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </p>
                        </div>
                    </details>
                </div>

                <section className = "FAQ_email_Entry_container">
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                   
                    <div className = 'form_container'>
                        <div className ='email_input_contain'>
                            <input  type="email" className = 'email_input' placeholder =""></input>
                            <label className = "email_label">Email Address</label>
                        </div>
                        <div>
                            <button className="email_button">
                                Get Started &gt;
                            </button>
                        </div>
                    </div>   

                </section>
            </section>
        </main>
    );
}

export default Main;