import React,{Component} from 'react'
import ReactSwipe from 'react-swipe'


class Swiper extends Component{
    componentWillMount(){
        console.log(this.props)
    }
    render(){
        return (
            <ReactSwipe className="carousel" swipeOptions={{startSlide: 2,
                speed: 400,
                auto: 1000,
                continuous: true,
                disableScroll: true,
                stopPropagation: true,
                callback: function(index, elem) {},
                transitionEnd: function(index, elem) {}}}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
            </ReactSwipe>
        )
    }
}
export default Swiper