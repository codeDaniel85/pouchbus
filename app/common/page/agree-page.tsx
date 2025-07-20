import { BusIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Textarea } from "../components/ui/textarea"
import { Link } from "react-router"
import { BorderBeam } from "../components/ui/border-beam"

export default function AgreePage() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <BusIcon className="size-4" />
                    </div>
                    Pouch Bus
                </a>
                <div className="flex flex-col gap-6">
                    <Card className="relative overflow-hidden">
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">개인정보 동의</CardTitle>
                            <CardDescription>
                                아래 정보들을 확인하고 동의해주세요.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid gap-6">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="all" />
                                            <Label htmlFor="all">전체 동의하기</Label>
                                        </div>
                                        <div className="text-sm text-muted-foreground ml-6">
                                            아래 항목 모두를 동의합니다.
                                        </div>
                                        <br />
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="required_agree_1" />
                                            <Label htmlFor="required_agree_1">[필수] 개인정보 수집 및 이용 동의</Label>
                                        </div>
                                        <Textarea id="required_agree_1_textarea" placeholder="전체 동의하기" defaultValue="Pouch Bus에 오신 것을 환영합니다.
                                            Pouch Bus 서비스(이하 ‘서비스’)를 이용해 주셔서 감사합니다." readOnly>
                                        </Textarea>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="optional_agree_1" />
                                            <Label htmlFor="optional_agree_1">[선택] 위치 정보 수집 및 이용 동의</Label>
                                        </div>
                                        <Textarea id="optional_agree_1_textarea" placeholder="전체 동의하기" defaultValue="Pouch Bus에 오신 것을 환영합니다.
                                            Pouch Bus 서비스(이하 ‘서비스’)를 이용해 주셔서 감사합니다." readOnly>
                                        </Textarea>
                                    </div>
                                    <Link to="/signup-page" className="w-full">
                                        <Button type="button" className="w-full">
                                            다음
                                        </Button>
                                    </Link>
                                    <div className="text-center text-sm">
                                        이미 Pouch Bus 회원이신가요?{" "}
                                        <a href="#" className="underline underline-offset-4">
                                            Login
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <BorderBeam
                            duration={6}
                            size={400}
                            className="from-transparent via-violet-700 to-transparent"
                        />
                    </Card>
                    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                        and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </div >
    )
}
