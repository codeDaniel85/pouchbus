import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    pixelBasedPreset,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';

interface WelcomeEmailProps {
    username: string;
    // steps: {
    //     id: number;
    //     Description: React.ReactNode;
    // }[];
    // links: {
    //     title: string;
    //     href: string;
    // }[];
}

const baseUrl = process.env.LOGO_POUCHBUS_URL
    ? `https://${process.env.LOGO_POUCHBUS_URL}`
    : '';

export const WelcomeEmail = ({
    username,
    // steps,
    // links,
}: WelcomeEmailProps) => {
    return (
        <Html>
            <Head />
            <Tailwind
                config={{
                    presets: [pixelBasedPreset],
                    theme: {
                        extend: {
                            colors: {
                                brand: '#2250f4',
                                offwhite: '#fafbfb',
                            },
                            spacing: {
                                0: '0px',
                                20: '20px',
                                45: '45px',
                            },
                        },
                    },
                }}
            >
                <Preview>Welcome to Pouch Bus</Preview>
                <Body className="bg-offwhite font-sans text-base">
                    {/* <Img
                        src="https://github.com/codeDaniel85/pouchbus/blob/16e0f3e8452016764cf40826f5808b498a5b703d/logo_pouchbus.png?raw=true"
                        width="184"
                        height="75"
                        alt="Pouch Bus"
                        className="mx-auto my-20"
                    /> */}
                    <Container className="flex items-center justify-center my-20">
                        <h1 className="text-3xl font-bold text-violet-700 text-center">Pouch Bus</h1>
                    </Container>

                    <Container className="bg-white p-45">
                        <Heading className="my-0 text-center leading-10 text-2xl">
                            🚌 파우치버스에 오신 것을 환영해요!
                        </Heading>

                        <br />
                        <Section>
                            <Row>
                                <Text className="text-lg text-center">
                                    안녕하세요, <strong className="text-violet-700">{username}</strong> 님!
                                </Text>
                            </Row>
                            <Row>
                                <Text className="text-base text-center">
                                    파우치버스에 탑승하신 것을 진심으로 환영합니다!🎉
                                </Text>
                            </Row>
                        </Section>

                        <Section>
                            <Row>
                                <Text className="text-base text-center">
                                    정신없는 출퇴근길, "셔틀은 언제 오는 거야?", "혹시 놓친 건 아니겠지?" 하며 초조하게 기다려본 경험. 다들 있으실 거에요.<br />
                                    이제 그런 걱정은 파우치버스에 맡겨주세요!😎
                                </Text>
                            </Row>
                        </Section>

                        <Section>
                            <Row>
                                <Text className="text-base text-center">
                                    파우치버스는 출퇴근 셔틀버스의 실시간 위치, 정확한 스케줄, 그리고 이동 경로를 손안에서 바로 확인할 수 있는 서비스예요.
                                </Text>
                            </Row>
                        </Section>

                        <Section>
                            <Row>
                                <Text className="text-base text-center">
                                    출근길, 퇴근길의 작은 변화가 당신의 하루를 바꿀 수 있다는 것,<br />
                                    파우치버스가 증명해 드릴게요!🎁
                                </Text>
                            </Row>
                        </Section>

                        {/* <ul>{steps?.map(({ Description }) => Description)}</ul> */}

                        <br />
                        <br />

                        <Section className="text-center">
                            <Link href="https://pouchbus.com">
                                <Button className="rounded-lg bg-violet-700 px-[18px] py-3 text-white">
                                    Go to your dashboard
                                </Button>
                            </Link>
                            {/* <Link href="https://pouchbus.com">
                                <Button className="rounded-lg text-violet-700 transition-all duration-300 font-bold">Login</Button>
                            </Link> */}
                        </Section>

                        {/* <Section className="mt-45">
                            <Row>
                                {links?.map((link) => (
                                    <Column key={link.title}>
                                        <Link
                                            className="font-bold text-black underline"
                                            href={link.href}
                                        >
                                            {link.title}
                                        </Link>{' '}
                                        <span className="text-green-500">→</span>
                                    </Column>
                                ))}
                            </Row>
                        </Section>
                    </Container>

                    <Container className="mt-20">
                        <Section>
                            <Row>
                                <Column className="px-20 text-right">
                                    <Link>Unsubscribe</Link>
                                </Column>
                                <Column className="text-left">
                                    <Link>Manage Preferences</Link>
                                </Column>
                            </Row>
                        </Section> */}

                        <br />
                        <div className="bg-offwhite my-20 p-4 rounded-lg border border-gray-200">
                            <Text className="text-center text-gray-400">
                                파우치버스, 대한민국 서울특별시 용산구 한강대로 100, 10층<br />
                                대표 이메일: mail.pouchbus@gmail.com<br />
                                대표 전화번호: 010-1234-5678
                            </Text>
                        </div>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

WelcomeEmail.PreviewProps = {
    username: "Daniel",
    // steps: [
    //     {
    //         id: 1,
    //         Description: (
    //             <li className="mb-20" key={1}>
    //                 <strong>Deploy your first project.</strong>{' '}
    //                 <Link>Connect to Git, choose a template</Link>, or manually deploy a
    //                 project you've been working on locally.
    //             </li>
    //         ),
    //     },
    //     {
    //         id: 2,
    //         Description: (
    //             <li className="mb-20" key={2}>
    //                 <strong>Check your deploy logs.</strong> Find out what's included in
    //                 your build and watch for errors or failed deploys.{' '}
    //                 <Link>Learn how to read your deploy logs</Link>.
    //             </li>
    //         ),
    //     },
    //     {
    //         id: 3,
    //         Description: (
    //             <li className="mb-20" key={3}>
    //                 <strong>Choose an integration.</strong> Quickly discover, connect, and
    //                 configure the right tools for your project with 150+ integrations to
    //                 choose from. <Link>Explore the Integrations Hub</Link>.
    //             </li>
    //         ),
    //     },
    //     {
    //         id: 4,
    //         Description: (
    //             <li className="mb-20" key={4}>
    //                 <strong>Set up a custom domain.</strong> You can register a new domain
    //                 and buy it through Netlify or assign a domain you already own to your
    //                 site. <Link>Add a custom domain</Link>.
    //             </li>
    //         ),
    //     },
    // ],
    // links: [
    //     {
    //         title: 'Visit the forums',
    //         href: 'https://www.netlify.com',
    //     },
    //     { title: 'Read the docs', href: 'https://www.netlify.com' },
    //     { title: 'Contact an expert', href: 'https://www.netlify.com' },
    // ],
} satisfies WelcomeEmailProps;

export default WelcomeEmail;
