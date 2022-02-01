
import LineChar from "../src/components/LineChar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Example/TestButton",
  component: LineChar,
} as ComponentMeta<typeof LineChar>;
const Template: ComponentStory<typeof LineChar> = (args) => <LineChar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: '' ,
  data:[
    { label:'Enero', value: 50},
    { label:'Febrero', value: 60},
    { label:'Marzo', value: 70},
    { label:'Abril', value: 90},
  ]
};
