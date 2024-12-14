import Body from "./Body"
import CourseSidebar from "./CourseSidebar"
import { Container, Stack } from "react-bootstrap";

export default function Course({ title, path, children }) {


    return (
        // <Body>
        <Stack direction="vertical" className="courseBody">
            <h1 className="display-4 text-center">{title}</h1>
            <Stack direction="horizontal" className="courseContentStack">
                <CourseSidebar path={path} />
                <Stack direction="vertical" className="courseBody">
                    {children}
                </Stack>

            </Stack>

        </Stack>
        // </Body>

    )
}