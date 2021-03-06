import React, { Component } from 'react';
import { Card, Image, Header } from 'semantic-ui-react'

class BucketlistCard extends Component {

    handleDelete = () => {
        this.props.deleteBucketItem(this.props.bucketlistItem.id)
    }

    render() {
        
        let {name, photo} = this.props.bucketlistItem.destination
        return (
            <Card className="bucketlist-card">
                <Image className="bucketlist-image" src={photo} alt="bucketlist destination"/>
                <Card.Content className="buckelist-content">
                    <Header className="bucketlist-header">{name}</Header>
                    <span className="bucketlist-delete-btn" onClick={this.handleDelete}>&times;</span>
                </Card.Content>
            </Card>
        );
    }
}

export default BucketlistCard;