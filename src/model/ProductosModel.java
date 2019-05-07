package model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import model.ProductosClass;


public class ProductosModel extends ProductosClass{
	private ArrayList<ProductosClass> list = new ArrayList<ProductosClass>();
//getters and setters
	public ArrayList<ProductosClass> getList() {
		return list;
	}

	public void setList(ArrayList<ProductosClass> list) {
		this.list = list;
	}

	public ProductosModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ProductosModel(int idProducto, String nombre, int idCategoria, double precio, String descripcion,
			String imagen) {
		super(idProducto, nombre, idCategoria, precio, descripcion, imagen);
		// TODO Auto-generated constructor stub
	}
	
	public void loadData()
	{
		this.CreateConnection();
		
		Statement st;
		try {
			st = this.con.createStatement();
			ResultSet rs = st.executeQuery("SELECT * FROM Productos ");

			while (rs.next()) // reads the table line by line
			{
				ProductosModel newP = new ProductosModel();
				newP.idProducto=Integer.parseInt(rs.getString(1));
				newP.nombre=rs.getString(2);
				newP.idCategoria=Integer.parseInt(rs.getString(3));
				newP.precio=rs.getDouble(4);
				newP.descripcion=rs.getString(5);
				newP.imagen=rs.getString(6);
				this.list.add(newP);
			}
	
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.disconnect();
	}
	
	
}



//	