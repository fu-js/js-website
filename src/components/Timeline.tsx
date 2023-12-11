import {Box} from "@/components/Box";

function Timeline() {


    return (
        <section>
            <h2
                className=" text-2xl font-semibold uppercase text-red-600 text-center"
                id="timeline"
            >
                Timeline sự kiện
            </h2>
            <div className="relative container flex flex-col items-start px-6 m6x-auto md:flex-row md:space-x-6 text-black">
                <div className="hidden md:block absolute top-40 left-12 w-10/12 h-1 bg-red-600"></div>
                <div className="absolute md:hidden w-1 left-1/2 h-4/5 -ml-1 bg-red-600"></div>

                <Box
                    title={"Vòng mở đơn"}
                    time={"6/1/2023 - 9/1/2023"}
                    description={"Mọi sinh viên FPT quan tâm đến JS Club sẽ điền đơn đăng ký để gửi gắm nguyện vọng trở thành một phần của đại gia đình JS."}
                />

                <Box
                    className={"mt-40"}
                    title={"Vòng phỏng vấn"}
                    time={"6/1/2023 - 9/1/2023"}
                    description={"Các ứng viên đã qua vòng đơn sẽ được trải qua một buổi phỏng vấn để\n" +
                        "                        xem bản thân có phù hợp để tiếp tục đồng hành với JS không."}
                />

                <Box
                    title={"Vòng thử thách"}
                    time={"6/1/2023 - 9/1/2023"}
                    description={"Các ứng viên đã qua vòng đơn sẽ được trải qua một buổi phỏng vấn để\n" +
                        "                        xem bản thân có phù hợp để tiếp tục đồng hành với JS không."}
                />

            </div>
        </section>
    );
}

export default Timeline;