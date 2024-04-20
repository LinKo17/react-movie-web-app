import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import "../../css/skeleton/card.css"

function CardSkeleton() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className='card-skeleton'>
                <Skeleton width={"100%"} height={"100%"} />
            </div>
        </SkeletonTheme>
    )
}
export default CardSkeleton