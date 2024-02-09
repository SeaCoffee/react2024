import { useForm } from "react-hook-form";
import { commentsService } from "../../services/commentsService";

export default function CommentForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const addComment = async (data) => {
        try {
            const response = await commentsService.createComment(data)

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(addComment)}>
            <textarea
                placeholder="Your comment"
                {...register("comment", {
                    required: "required field",
                    minLength: {
                        value: 30,
                        message: "Type at least 30 characters"
                    }
                })}
            />
            {errors.comment && <p>{errors.comment.message}</p>}
            <button type="submit">Send</button>
        </form>
    )
}
