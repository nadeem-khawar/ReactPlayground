import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/catalyst/navbar';
import {
    Sidebar,
    SidebarHeader,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
} from '../components/catalyst/sidebar';
import { SidebarLayout } from '../components/catalyst/sidebar-layout';

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
                            <SidebarItem href="/animal-show">
                                <SidebarLabel>Animal Show</SidebarLabel>
                            </SidebarItem>
                            <SidebarItem href="/lift-state">
                                <SidebarLabel>Lift State</SidebarLabel>
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
