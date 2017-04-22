package nl.hu.v1wac.firstapp.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/DynamicServlet.do")
public class DynamicServlet extends HttpServlet {
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {

		String sNumber1 = req.getParameter("inputN1");
		String sNumber2 = req.getParameter("inputN2");
		String o1 = req.getParameter("operator");
		int n1 = Integer.parseInt(sNumber1);
		int n2 = Integer.parseInt(sNumber2);
		int result = 0;

		if (o1.equals("+")) {
			result = n1 + n2;
		}
		if (o1.equals("-")) {
			result = n1 - n2;
		}
		if (o1.equals("/")) {
			result = n1 / n2;
		}
		if (o1.equals("*")) {
			result = n1 * n2;
		}

		PrintWriter out = resp.getWriter();
		resp.setContentType("text/html");

		out.println("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">");
		out.println("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
		out.println(" <head>");
		out.println(" <meta http-equiv=\"content-type\" content=\"text/html;charset=iso-8859-1\" />");
		out.println(" <title>Dynamic Example</title>");
		out.println(" </head>");
		out.println(" <body>");
		out.println(" <h2> " + result + " </h2>");
		out.println(" </body>");
		out.println("</html>");
	}
}
