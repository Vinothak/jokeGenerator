import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

export default class Jokes extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {

            joke:null,
            punch:null,
            show:true,
            click:1,
            showQuotes:true
        };
    }

    getAnswer=()=>{
        this.componentDidMount();
    }
        componentDidMount(){
            axios.get('https://official-joke-api.appspot.com/random_joke')
            .then(res=>{
               const jokes=res.data.setup
               const ans=res.data.punchline
               this.setState({
                   joke:jokes,
                   punch:ans,
                   click:1,
                   show:true,
                   showQuotes:true
               })
            })
        }
    
     showPunch(){
         if(this.state.click==1)
         this.setState({
             show:!this.state.show,
             click:0,
         })
     }

    render() {
        const cls=(this.state.showQuotes==true?'show':'hide');
        return (
            <>   
         <div style={{marginBottom:'10px',backgroundColor:'green',visibility:'hidden'}}>vewvewv</div>
        <div><p id='quotes' className={cls}>{this.state.joke}</p></div>
        {this.state.show===false?
            <div id='impact' className='show'><p style={{fontSize:'15px'}}>{this.state.punch}</p></div>: null}

        </>
        );
    
}}

