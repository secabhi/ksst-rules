import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>KSST</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            Parking Rules and Regulations:
          </h2>
          <h3>Dear Residents,</h3>
          <ol>
            <li>
              Every resident of the society must abide by the designated parking
              areas and not park in unauthorized or restricted zones.
            </li>
            <li>
              Designated parking spots should be used exclusively for their
              personal vehicle.
            </li>
            <li>Guest parking spaces should be utilized for visitors.</li>
            <li>
              Residents should park their vehicles in a manner that does not
              hamper the free movement of other vehicles or obstruct fire lanes,
              driveways, or emergency exits.
            </li>
            <li>
              Unauthorized or abandoned vehicles should not be parked within the
              society premises. Residents should report such vehicles to the
              society management for necessary action.
            </li>
            <li>
              The speed limit within the parking/driveway area should be adhered
              to 15 kmph, ensuring the safety of pedestrians and residents.
            </li>
            <li>
              Residents should promptly notify the society management of any
              changes in their vehicles' details.
            </li>
            <li>
              Parking permits or stickers provided by the society management
              must be displayed on the vehicle's windshield.
            </li>
            <li>
              Vehicles that leak oil, fuel, or any other substances should not
              be parked within the society premises. The resident should ensure
              prompt repair and clean-up to avoid any environmental hazards.
            </li>
            <li>
              Violations of parking rules shall lead to a penalty for each
              violation*.
            </li>
            <li>
              For the first-time violation, the KSST committee will issue a
              warning.
            </li>
            <li>
              On repeating the violation 2nd time, Rs 500/- only will be
              charged.
            </li>
            <li>
              Repeating the violation 3rd time, Rs 1500 /- will be charged.
            </li>
            <li>
              Repeating the violation 4th time, Rs 3000/- will be charged.
            </li>
            <li>
              Repeating multiple violations will attract the removal of the
              vehicle from the parking space permanently.
            </li>
            <li>
              QR code will be provided at security gate and multiple places in
              society to quickly access the rules.
            </li>
            <li>
              Please refrain from engaging in disputes or arguments with
              security guards, as they are simply carrying out their duties.
            </li>
            <li>
              If residents experience any inconvenience or believe a guard is
              not adhering to the rules, kindly contact the society manager or
              submit a concern via the MyGate app.
            </li>
            <li>Your concerns will be given top priority by the committee.</li>
          </ol>

          <div style={{ marginTop: "20px" }}>
            <div>
              <strong
                style={{
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                NOTE
              </strong>
              <p>
                We have vehicle stickers based on the information collected.
              </p>
            </div>
            <p>
              If residents are owners, they need to show MyGate with their ID as
              proof before collecting the sticker. Tenants have to show MyGate,
              ID, and rental agreement to get parking stickers.
            </p>
            <p>
              Stickers will not be provided until residents fill the sheet.
              Failing to provide the details will lead to security questions by
              guards at the entry gate that people need to face each time and
              may need to add an entry for vehicles in the notebook maintained
              by guards.
            </p>
          </div>
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            Above Rules & Regulations can change based on feedback and
            necessity.
          </h3>
        </div>
      </main>
    </>
  );
}
