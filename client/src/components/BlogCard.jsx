import ViewBlogs from "../pages/ViewBlogs"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const BlogCard= ({onClick, date, description, run, id}) => {

    return (
        <div className="card blog-card"onClick={() => onClick(id)}  >
            <div className="info-wrapper flex-col">
                <h3 className= "runDateDisplay">Run Date: {date}</h3>
                <p className="cardDisplay">Description: {description}</p>
            </div>

        </div>
    )
}

export default BlogCard
