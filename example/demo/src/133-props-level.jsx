import Section from './133-propsLevel-Section'
import Heading from './133-propsLevel-Heading'
export default function PropsLevel() {
  return (
    <>
      <Section>
        <Heading level={1}>主标题</Heading>
        <Heading level={2}>副标题</Heading>
        <Heading level={3}>子标题</Heading>
        <Heading level={4}>子子标题</Heading>
        <Heading level={5}>子子子标题</Heading>
        <Heading level={6}>子子子子标题</Heading>
      </Section>
    </>
  )
}
