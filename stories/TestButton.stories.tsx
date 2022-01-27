
import LineChar from "../src/components/LineChar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Example/TestButton",
  component: LineChar,
} as ComponentMeta<typeof LineChar>;
const labels = ["January", "February", "March", "April", "May", "June", "July"];
const Template: ComponentStory<typeof LineChar> = (args) => <LineChar {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  labels: labels ,
  datasets: [{ label:'dadas', data: labels.map(()=>(4)), borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.5)' }],
};
