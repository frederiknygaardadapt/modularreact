import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Container } from './Container'

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <>
      <div className="bg-lime-700">This is Sparta!</div>
      <div className="bg-lime-700">This is Sparta!</div>
      <div className="bg-lime-700">This is Sparta!</div>
    </>
  </Container>
)

export const ContainerSm = Template.bind({})
ContainerSm.args = {}

export const ContainerMd = Template.bind({})
ContainerMd.args = {
  containerSize: 'md',
}

export const ContainerLg = Template.bind({})
ContainerLg.args = {
  containerSize: 'lg',
}
