import React from "react";

import {Radiogroupe } from '../../components/molecule/Radiogroupe/Radiogroupe'

export default {
    title:"Atoms/radiogroupe",
    component: Radiogroupe,
    argType: {
        backgroundColor: {control: 'color'}
    },
}

const Template = (args) => <Radiogroupe {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    loading: false,

}  
export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    loading: false,

}  

export const isLoading = Template.bind({});
isLoading.args = {
    loading: true,
}   