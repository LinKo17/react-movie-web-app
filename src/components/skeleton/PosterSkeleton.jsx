import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import "../../css/skeleton/poster.css"

function PosterSkeleton(){
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className='poster-skeleton'>
          <Skeleton width={"100%"} height={"100%"}/>
        </div>
      </SkeletonTheme>
    );
}
export default PosterSkeleton