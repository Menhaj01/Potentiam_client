import React, { Component } from 'react'

export class FormUser extends Component {

    state = {
       links: [],
        description: "feqfqfq",
        Youtube: "eefq",
        Snapchat: "feqfq",
        Twitter: "feqfqefq",

    }
    


    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        this.setState({
            [key]:value
        })

    }

    handleSubMit = (event) => {
        event.preventDefault();
        // post
        //
        const dataToSend= {
            description: this.state.description,
            links: this.state.links
        }
       
    }   
    
    handleSocialLinks = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        const socialLink = {url: value, network: key};

        const  linkIndex = this.state.links.findIndex(eleMent => eleMent.network === key)

        if(linkIndex < 0){
            this.setState({
                links: [...this.state.links, socialLink]
            })
        }else{


            // const copy = [...this.state.links ];
            // copy.splice(linkIndex, 1, socialLink)

            // this.setState({
            //     links: copy
            // })
            this.setState({
                links: this.state.links.map((link,index) => index === linkIndex ? socialLink : link  )
            })
        }




       
    }
    

 
    render() {
        return (
            <form  onSubmit={this.handleSubMit} >
                <label>Instagram</label>
                <input onChange={this.handleSocialLinks} name="Instagram"></input>
                <label>Youtube</label>
                <input  onChange={this.handleSocialLinks} name="Youtube"></input>
                <label>Facebook</label>
                <input name="Facebook"></input>
                <label>Snapchat</label>
                <input name="Snapchat"></input>
                <label>Twiter</label>
                <input name="Twitter"></input>
                <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt=""></img>
                <select>
                 
                </select>
                <textarea name="description" id="" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </form>
        )
    }
}

export default FormUser
