import Star from '../assets/star.svg';

export default function Rating() {
    const stars = Array(5).fill(Star);
    return(
        <>
            {
                stars.map((star, index) => (
                    <img
                        key={index}
                        src={star}
                        width="14"
                        height="14"
                        alt="star"
                    />
                ))
            }
        </>
    )
}