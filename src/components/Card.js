import { StyledCard } from "./styles/Card.styles"

// Way1 and Way3
// const Card = ({title, body, image}) => (
//     <div>
//         <div>
//             <h2>{title}</h2>
//             <p>{body}</p>
//         </div>
//         <div>
//             <img src={`./images/${image}`} alt="" />
//         </div>
//     </div>
// )

// Way2
const Card = ({item}) => (
    <StyledCard layout = {item.id%2 === 0 && 'row-reverse'}>
        <div>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>
        <div>
            <img src={`./images/${item.image}`} alt="" />
        </div>
    </StyledCard>
)
export default Card