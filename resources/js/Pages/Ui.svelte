<script>
    import Button from "../RelishUI/button.svelte";
    import Heading from "../RelishUI/heading.svelte";
    import Input from "../RelishUI/input.svelte";
    import Text from "../RelishUI/text.svelte";
</script>

<div class="flex flex-col gap-y-5">
    <div class="flex flex-col gap-y-4">
        <Heading class="text-9xl">H1</Heading>
        <Heading class="text-8xl">H2</Heading>
        <Heading class="text-7xl">H3</Heading>
        <Heading class="text-6xl">H4</Heading>
        <Heading class="text-5xl">H5</Heading>
        <Heading class="text-4xl">H6</Heading>
        <Text>Hello World!</Text>
    </div>

    <div class="flex flex-row gap-x-4">
        <Button variant="success">Increment</Button>
        <Button variant="danger">Decrement</Button>
        <Button variant="warning">33 AD</Button>
        <Button>Reset</Button>
    </div>

    <div class="flex flex-row gap-x-4">
        <Input placeholder="Username" variant="primary" />
        <Input placeholder="Email" variant="success" />
        <Input placeholder="Phone" variant="warning" />
        <Input placeholder="Address" variant="danger" />
    </div>
</div>
