import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"

import "../../css/details/actor.css"

import NoCaster from "../../assets/no_caster.jpg"
import Loading from "../Loading"

function TvActors(props) {

    let { id } = props

    const { data, load } = useMultiple(configuration.actors.tv + "/" + id + configuration.actors.credits);
    return (

        <div className="my-5">

            {
                load ?
                    <div className="d-flex justify-content-center"  style={{height:"200px"}}>
                        <Loading />
                    </div>

                    :

                    <>
                        {
                            data.cast.length == 0 ?

                            ""

                            :

                            <div>Actors</div>
                        }

                        <div className="actor-main-container">
                            {data.cast.map(actor => {
                                return (
                                    <div key={actor.id} className="actor-container">
                                        <div className="actor-image">
                                            {
                                                actor.profile_path ?
                                                    <div className="image-box">
                                                        <img src={configuration.image.original + actor.profile_path} />
                                                    </div>
                                                    :
                                                    <div className="image-box">
                                                        <img src={NoCaster} />
                                                    </div>
                                            }
                                        </div>
                                        <div className="original_name">{actor.original_name}</div>
                                        {/* <div className="charactor_name">{actor.character}</div> */}

                                    </div>
                                )
                            })}
                        </div>
                    </>
            }
        </div>
    )
}
export default TvActors