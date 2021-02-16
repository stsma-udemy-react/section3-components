import React from 'react';
import ReactDOM from 'react-dom';
import faker, { fake } from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Sam' 
                    timeAgo="Today at 6:00PM" 
                    blogPost="Nice blog post!" 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Alex' 
                    timeAgo="Today at 4:45PM" 
                    blogPost="Great notes." 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Jane' 
                    timeAgo="Today at 8:50PM" 
                    blogPost="Hooray! Perfect." 
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));