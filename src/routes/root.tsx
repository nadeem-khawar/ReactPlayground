import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import {
    Sidebar,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
} from '../components/sidebar';
import { SidebarLayout } from '../components/sidebar-layout';

export default function Root() {
    return (
        <SidebarLayout
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <SidebarSection className="max-lg:hidden">
                            <SidebarItem href="/statehook">
                                <SidebarLabel>UseState Hook</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/effecthook">
                                <SidebarLabel>useEffect Hook</SidebarLabel>
                            </SidebarItem>
                        </SidebarSection>
                    </SidebarHeader>
                </Sidebar>
            }
            navbar={<Navbar></Navbar>}
        >
            <Outlet />
        </SidebarLayout>
    );
}
