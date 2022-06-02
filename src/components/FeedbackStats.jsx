import PropTypes from "prop-types"


function FeedbackStats({ feedback }) {
    let avarege = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    avarege = avarege.toFixed(1).replace(/[.,]0$/,'')

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews </h4>
            <h4>Avarege Rating: {isNaN(avarege) ? 0: avarege} </h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}
export default FeedbackStats