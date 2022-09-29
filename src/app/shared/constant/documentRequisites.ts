import { ListType } from "../models/documentRequisitesModel";

export const documentRequisitesDummy = [
  {
    title: "Pekerja",
    img: "https://edufund.co.id/assets/images/icon/icon-pekerja.svg",
    info: "PNS, TNI / POLRI, Karyawan BUMN, Karyawan Swasta",
    documentList: [
      {
        title: "KTP (Kartu Tanda Penduduk)",
        listType: ListType.List
      },
      {
        title: "Bukti Penghasilan",
        listType: ListType.List
      },
      {
        title: "NPWP, atau",
        listType: ListType.Sub
      },
      {
        title: "Slip Gaji, atau",
        listType: ListType.Sub
      },
      {
        title: "Surat Keterangan Kerja, atau",
        listType: ListType.Sub
      },
      {
        title: "Rekening Koran 1 bulan terakhir",
        listType: ListType.Sub
      },
      {
        title: "Tagihan pembayaran dari institusi pendidikan (selain EduCash)",
        listType: ListType.List
      },
    ]
  },
  {
    title: "Wiraswasta",
    img: "https://edufund.co.id/assets/images/icon/icon-wiraswasta.svg",
    info: null,
    documentList: [
      {
        title: "KTP (Kartu Tanda Penduduk)",
        listType: ListType.List
      },
      {
        title: "Bukti Penghasilan Usaha",
        listType: ListType.List
      },
      {
        title: "NPWP, atau",
        listType: ListType.Sub
      },
      {
        title: "Rekening Koran 1 bulan terakhir",
        listType: ListType.Sub
      },
      {
        title: "Tagihan pembayaran dari institusi pendidikan (selain EduCash)",
        listType: ListType.List
      },
    ]
  },
  {
    title: "Pelajar",
    img: "https://edufund.co.id/assets/images/icon/icon-pelajar.svg",
    info: null,
    documentList: [
      {
        title: "KTP (Kartu Tanda Penduduk)",
        listType: ListType.List
      },
      {
        title: "Tagihan pembayaran dari institusi pendidikan (selain EduCash)",
        listType: ListType.List
      },
    ]
  }
]