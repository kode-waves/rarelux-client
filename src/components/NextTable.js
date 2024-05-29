import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
 const NextTable = (props) =>  {
  const {headings, children, data} = props;
    return (
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            {headings.map((title, index) => {
              return <TableHead className="font-semibold w-1/12" key={index}>{title}</TableHead>
            })
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {invoices.map((invoice, index) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="text-gray-400">#{index +1}</TableCell>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))} */}
          {children}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  
  export default NextTable;